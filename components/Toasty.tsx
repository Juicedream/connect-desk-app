import { toast, ExternalToast } from "sonner"

function buildOptions(description?: string): ExternalToast {
  return {
    description: description ? (
      <pre className="bg-code text-code-foreground mt-2 w-[320px] overflow-x-auto rounded-md p-4">
        <code>{description}</code>
      </pre>
    ) : undefined,
    position: "top-center",
    classNames: {
      content: "flex flex-col gap-2",
    },
    style: {
      "--border-radius": "calc(var(--radius) + 4px)",
    } as React.CSSProperties,
  }
}

export const toasty = {
  default: (message: string, description?: string) => toast(message, buildOptions(description)),
  success: (message: string, description?: string) => toast.success(message, buildOptions(description)),
  error:   (message: string, description?: string) => toast.error(message, buildOptions(description)),
  info:    (message: string, description?: string) => toast.info(message, buildOptions(description)),
  warning: (message: string, description?: string) => toast.warning(message, buildOptions(description)),
  loading: (message: string, description?: string) => toast.loading(message, buildOptions(description)),
}