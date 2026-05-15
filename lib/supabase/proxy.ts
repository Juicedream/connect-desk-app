import { createServerClient } from "@supabase/ssr"
import { NextResponse, type NextRequest } from "next/server"

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({ request })

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll()
        },

        setAll(cookiesToSet, headers) {
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value)
          )
          supabaseResponse = NextResponse.next({ request })

          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          )

          Object.entries(headers).forEach(([key, value]) =>
            supabaseResponse.headers.set(key, value)
          )
        },
      },
    }
  )

  // for the client side
  const { data } = await supabase.auth.getUser()
  const user = data?.user
  const path = request.nextUrl.pathname

  if (!user) {
    // no user, potentially respond by redirecting the user to the login page
    if (
      path.startsWith("/client") ||
      path.startsWith("/freelancer") ||
      path.startsWith("/admin")
    ) {
      return NextResponse.redirect(new URL("/login", request.url))
    }
    return supabaseResponse
  }
  
  // // skip auth pages entirely — never redirect them
  // if (path.startsWith("/login" )|| path.startsWith("/register")) {
  //   // if (user)
  //   return supabaseResponse
  // }

  // fetch role from your public.users table
  let role: string | null = null
  try {
    const { data: dbUser } = await supabase
      .from("users")
      .select("role")
      .eq("email", user.email)
      .single()

    role = dbUser?.role ?? null
  } catch (err) {
    console.log("middleware db error", err)
    return supabase
  }

  // already logged in — redirect away from auth pages
  if (user && (path === "/login" || path.startsWith("/register"))) {
    if (!role) return NextResponse.redirect(new URL("/login", request.url))
    return NextResponse.redirect(new URL(`/${role}/dashboard`, request.url))
  }

  // IF user goes to /dashboard route to their role dashboard
  if (path === "/dashboard" || path === "/") {
    return NextResponse.redirect(new URL(`/${role}/dashboard`, request.url))
  }

  if (path.startsWith("/client") && role !== "client") {
    return NextResponse.redirect(new URL(`/${role}/dashboard`, request.url))
  }
  if (path.startsWith("/freelancer") && role !== "freelancer") {
    return NextResponse.redirect(new URL(`/${role}/dashboard`, request.url))
  }
  if (path.startsWith("/admin") && role !== "admin") {
    return NextResponse.redirect(new URL(`/${role}/dashboard`, request.url))
  }

  return supabaseResponse
}
