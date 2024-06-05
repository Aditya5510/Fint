import { InferRequestType,InferResponseType } from "hono";  
import {useMutation,useQueryClient} from "@tanstack/react-query";

import {client} from "@/lib/hono"
import { use } from "react";
import { toast } from "sonner";


type ResponseType=InferResponseType<typeof client.api.accounts.$post>
type RequestType=InferRequestType<typeof client.api.accounts.$post>["json"]


export const useCreatEAccount=()=>{
    const queryClient =useQueryClient();
    const mutation =useMutation<ResponseType,Error,RequestType>({
        mutationFn:async (json)=>{
            const response =await client.api.accounts.$post({json});
            return await response.json();
        },
        onSuccess:()=>{
            toast.success("Account created");
            queryClient.invalidateQueries({queryKey:["accounts"]});
        },
        onError:()=>{
            toast.error("failed to create")
        }
    })
    return mutation;
}
