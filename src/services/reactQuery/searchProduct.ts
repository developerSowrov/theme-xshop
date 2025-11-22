import { AxiosError } from "axios";
import { useQuery } from "@tanstack/react-query";
import { IProductsProps } from "@/components/common/product/type";
import { fetchSearchProduct } from "@/services/axios/requests/products";

const GetSearchProduct = (query: string) => {
  return useQuery<IProductsProps[], AxiosError>({
    queryKey: ["SearchProduct", query],
    queryFn: async () => {
      try {
        if (!query) return [];
        const response = await fetchSearchProduct(query);
        return response?.data;
      } catch (error: any) {
        throw new Error(error.message);
      }
    },
    enabled: !!query, // prevents API call if query is empty
  });
};

export default GetSearchProduct;
