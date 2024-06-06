import {useQuery} from "@tanstack/react-query"

import {client} from "@/lib/hono"

export const useAccount = (id?:string) => {
    const query=useQuery({
        enabled:!!id,
        queryKey:["account",{id}],
        queryFn:async()=>{const res=await client.api.accounts[":id"].$get({param:{id}});

            if(!res.ok){
                throw new Error("failed to fetch account"+res.statusText )
            }
            const {data}=await res.json();
            return data;
        },

    })
    return query;
}