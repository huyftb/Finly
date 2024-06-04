import { CheckCircledIcon } from "@radix-ui/react-icons";


export const FormSuccess= ({message}) => {
    if (!message) return null;
    return (
    

    <div className="flex bg-green-100 p-3 rounded-md items-center gap-x-2 text-green-700">
      <CheckCircledIcon className="h-4 w-4"/>
      <p>{message}</p>
    </div>
  );
}