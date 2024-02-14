"use client";
import styles from "./page.module.css";
import { useState, useEffect, Suspense } from "react";

import Gallery from "./gallery";

export default function Home() {
  const [users, setUsers] = useState(null);
  const [isFetching, setFetching] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        if (!response.ok) throw new Error("Failed to fetch data");
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setFetching(false);
      }
    };
    fetchUsers();
  }, []);

  return (
    <main className={styles.main}>
      {isFetching ? (
        <p>Fetching User Data ...</p>
      ) : !users ? (
        <p>No users data</p>
      ) : (
        <Gallery users={users} />
      )}
    </main>
  );
}
