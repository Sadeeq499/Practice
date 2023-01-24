import React from 'react'
import { useSearchParams } from 'react-router-dom'
export default function List() {
  const [searchParams] = useSearchParams();
  // console.log(searchParams);
  const pro = Object.fromEntries([...searchParams]);
  return (    
    <div>
      <h1>List {pro.p}</h1>
      </div>
  )
}
