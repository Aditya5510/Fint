import {useQuery} from "@tanstack/react-query"

import {client} from "@/lib/hono"

export const useAccounts = () => {
    const query=useQuery({
        queryKey:["accounts"],
        queryFn:async()=>{const res=await client.api.accounts.$get();

            if(!res.ok){
                throw new Error("failed to fetch Accounts"+res.statusText )
            }
            const {data}=await res.json();
            return data;
        },

    })
    return query;
}