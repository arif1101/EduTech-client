import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function CredentialLogin() {
  return (
    <Dialog>
      <DialogTrigger className="bg-sky-500 hover:bg-sky-600" asChild>
        <Button variant="outline">Login Credentials</Button>
      </DialogTrigger>
      <DialogContent className="flex flex-col gap-0 p-0 sm:max-h-[min(640px,80vh)] sm:max-w-lg [&>button:last-child]:hidden">
        <div className="overflow-y-auto">
          <DialogHeader className="contents space-y-0 text-left">
            <DialogTitle className="px-6 pt-6">
              Frequently Asked Questions (FAQ)
            </DialogTitle>
            <DialogDescription asChild>
              <div className="p-6">
                <div className="[&_strong]:text-foreground space-y-4 [&_strong]:font-semibold">
                  <div className="space-y-1">
                    <p>
                      <strong className="text-xl">Admin</strong>
                    </p>
                    <p>emial : tony@gmail.com</p>
                    <p>password : 11111111</p>
                  </div>
                  <div className="space-y-1">
                    <p>
                      <strong className="text-xl">User</strong>
                    </p>
                    <p>emial : arif@gmail.com</p>
                    <p>password : 11111111</p>
                  </div>
                </div>
              </div>
            </DialogDescription>
          </DialogHeader>
        </div>
      </DialogContent>
    </Dialog>
  )
}
