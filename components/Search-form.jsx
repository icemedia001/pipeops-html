"use client";

import React, { useState, useEffect } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const Search = () => {
	const [location, setLocation] = useState("");
	const [bloodType, setBloodType] = useState("");
	const bloodTypes = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
	const GOOGLE_MAPS_API_KEY = "YOUR_GOOGLE_MAPS_API_KEY";

	useEffect(() => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(
				async (position) => {
					const { latitude, longitude } = position.coords;
					const address = await getAddressFromCoordinates(latitude, longitude);
					setLocation(address);
				},
				(error) => {
					console.error("Error getting location:", error);
				}
			);
		} else {
			console.error("Geolocation is not supported by this browser.");
		}
	}, []);

	const getAddressFromCoordinates = async (lat, lon) => {
		try {
			const response = await fetch(
				`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lon}&key=${GOOGLE_MAPS_API_KEY}`
			);
			const data = await response.json();
			if (data.results && data.results.length > 0) {
				return data.results[0].formatted_address;
			} else {
				throw new Error("No address found for the given coordinates.");
			}
		} catch (error) {
			console.error("Error fetching address:", error);
			return `Lat: ${lat}, Long: ${lon}`;
		}
	};

	const handleSearch = (event) => {
		event.preventDefault();
		console.log("Location:", location);
		console.log("Blood Type:", bloodType);
	};

	return (
		<form
			className="flex justify-center"
			onSubmit={handleSearch}
		>
			<div className="flex items-center justify-center gap-3 w-1/3">
				<Input
					type="text"
					placeholder="Location"
					value={location}
					className="placeholder:text-sm text-black/70 border-[#2C2C2C]/10"
					onChange={(e) => setLocation(e.target.value)}
				/>
				<select
					value={bloodType}
					onChange={(e) => setBloodType(e.target.value)}
					className="placeholder:text-sm text-black/70 border-[#2C2C2C]/10 flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
				>
					<option
						value=""
						disabled
					>
						Select Blood Type
					</option>
					{bloodTypes.map((type) => (
						<option
							key={type}
							value={type}
						>
							{type}
						</option>
					))}
				</select>
				<Button
					type="submit"
					className="text-white bg-[#C01A2C]"
				>
					Search
				</Button>
			</div>
		</form>
	);
};

export default Search;
