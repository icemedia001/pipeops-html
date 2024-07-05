import { Locate, LocateIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const BloodBanks = () => {
	const bloodBanks = [
		{
			name: "Chevron Medical Hospital",
			pic: "https://via.placeholder.com/150",
			bloodType: "A+",
			pints: 25,
			proximity: 25,
		},
		{
			name: "Tolu Medical Centre",
			pic: "https://via.placeholder.com/150",
			bloodType: "O-",
			pints: 25,
			proximity: 25,
		},
		{
			name: "Hamkad Hospital",
			pic: "https://via.placeholder.com/150",
			bloodType: "B+",
			pints: 25,
			proximity: 25,
		},
		// Add more donor objects as needed
	];
	return (
		<div className="mt-16">
			<h1 className="font-semibold text-[#333] text-[30px] mb-6">
				Blood Banks Near You
			</h1>
			<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
				{bloodBanks.map((bloodbank, index) => (
					<div
						key={index}
						className="flex flex-col"
					>
						<div className="mb-2 ">
							<img
								src={bloodbank.pic}
								alt={`${bloodbank.name}'s picture`}
								className="object-cover w-[366px] h-[262px] rounded-[14px]"
							/>
						</div>
						<div className="space-y-1">
							<Link
								href="/"
								className="font-semibold"
							>
								{bloodbank.name}
							</Link>

							<div className="flex items-center justify-between">
								<p className="text-black/70 text-sm">{bloodbank.pints} pints</p>
								<p className="text-black/70 text-sm flex items-center">
									<Locate className="text-black/70 text-xs mr-2" />
									{bloodbank.proximity} km
								</p>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default BloodBanks;
