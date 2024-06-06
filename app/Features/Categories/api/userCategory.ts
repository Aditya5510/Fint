import { useQuery } from "@tanstack/react-query";

import { client } from "@/lib/hono";

export const useCategory = (id?: string) => {
  const query = useQuery({
    enabled: !!id,
    queryKey: ["category", { id }],
    queryFn: async () => {
      const res = await client.api.categories[":id"].$get({ param: { id } });

      if (!res.ok) {
        throw new Error("failed to fetch category" + res.statusText);
      }
      const { data } = await res.json();
      return data;
    },
  });
  return query;
};
