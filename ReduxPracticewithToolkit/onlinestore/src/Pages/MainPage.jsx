import React from "react";
import Layout from "../components/Layout/Layout";
import Card from "./Card";
import { useQuery } from "react-query";
import { allProducts } from "../hooks/apiCalls";
import Login from "../components/login";
function MainPage() {
  const { isError, isLoading, data } = useQuery({
    queryFn: () => allProducts(),
    onSuccess: (data) => {
      console.log(data);
    },
    onError: console.error(),
  });

  return (
    <Layout>
      <Card products={data} />
      {/* <Login /> */}
      <h1 className="text-3xl text-red-900 font-mono">SaQi❤️</h1>

      {/* create a beautiful button for subscriibe now  */}
    </Layout>
  );
}

export default MainPage;
