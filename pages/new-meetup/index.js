import { useRouter } from "next/router";
import React, { Fragment } from "react";
import Layout from "../../components/layout/Layout";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import Head from "next/head";

function NewMeetupPage() {
	const router = useRouter();

	async function addMeetupHandler(enteredMeetupData) {
		const response = await fetch("/api/new-meetup", {
			method: "POST",
			body: JSON.stringify(enteredMeetupData),
			headers: { "Content-Type": "application/json" },
		});
		const data = await response.json();

		router.push("/");
	}

	return (
		<Fragment>
			<Head>
				<title>Add a New Meetup</title>
				<meta
					name="description"
					content="Add your own meetups and create amazing network"
				/>
			</Head>
			<NewMeetupForm onAddMeetup={addMeetupHandler} />;
		</Fragment>
	);
}

export default NewMeetupPage;
