import { ExclamationTriangleIcon } from "@radix-ui/react-icons";


export const FormError = ({message}) => {
    if (!message) return null;
    return (
    

    <div className="flex bg-red-100 p-3 rounded-md items-center gap-x-2 text-red-700">
      <ExclamationTriangleIcon className="h-4 w-4"/>
      <p>{message}</p>
    </div>
  );
}