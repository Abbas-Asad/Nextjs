"use client"
import Image from 'next/image';
import { useEffect, useState } from 'react';

interface IPhoto {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};
export default function Photos() {

  const [photosData, setPhotosData] = useState<IPhoto[]>([])
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/photos");
      const data = await res.json();

      setPhotosData(data)
      // console.log(data); 
    };

    fetchData();
  }, []); // Dependency array ensures this runs only once on mount

  return (
    <div>
      <h1>PhotosData:</h1>
      <br />
      <ul>
        {photosData.map((photo) => {
          return <li key={photo.id}>
            <Image src={photo.url} alt={photo.title} width={"100"} height={"100"} />
            <br />
            <br />
          </li>
        })}
      </ul>
    </div>
  );
}
