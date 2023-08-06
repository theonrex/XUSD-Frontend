import type { NextPage } from 'next';
import Head from 'next/head';
import styles from './index.module.css';
import { AppLayout } from "../components";
import React from "react";

const Home: NextPage<{}> = () => {
	return (
		<AppLayout>
			<div className={styles["container"]}>
				<Head>
					<title>Home</title>
				</Head>
				Home
			</div >
		</AppLayout>
	);
};

export default Home;
