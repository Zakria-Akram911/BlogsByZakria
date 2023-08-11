import React, { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const unsub = onSnapshot(
      collection(db, "Blogs"),
      (snapshot) => {
        let list = [];
        snapshot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setBlogs(list);
      },
      (error) => {
        console.log(error);
      }
    );

    return () => {
      unsub();
    };
  }, []);

  console.log("blogs", blogs);
  return (
    <div className="container-fluid py-4 pt-4 padding">
      <div className="row mx-0">
        <h2>Trending</h2>
        <div className="col-md-8">
          <h2>Blog Section</h2>
        </div>
        <div className="col-md-3">
          <h2>Tags</h2>
          <h2>Most Popular</h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
