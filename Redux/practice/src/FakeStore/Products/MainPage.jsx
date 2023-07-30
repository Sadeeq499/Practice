import React from "react";
import Header from "../Components/Header";
import Card from "./Card";
import { useQuery } from "react-query";
import { getProducts } from "../Api/fakeStore";

function MainPage() {
  const { isLoading, error, data } = useQuery({
    queryKey: ["products"],
    queryFn: () => getProducts(),
  });

  if (isLoading) return "Loading...";
  if (error) return "An error has occurred: " + error.message;

  return (
    <>
      <Header />

      <div className="flex flex-row flex-wrap justify-center items-center">
        <Card Data={data} />
      </div>
    </>
  );
}

export default MainPage;
