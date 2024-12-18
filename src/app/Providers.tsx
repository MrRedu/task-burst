import { Toaster } from "sonner";
export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Toaster position="bottom-right" closeButton toastOptions={{
        className: 'bg-c-snow',
      }} />
      {children}
    </>
  )
};
