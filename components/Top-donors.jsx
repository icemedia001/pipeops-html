import React from "react";

const TopDonors = () => {
	const donors = [
		{
			name: "John Doe",
			pic: "https://via.placeholder.com/150",
			bloodType: "A+",
			tag: "Frequent Donor",
		},
		{
			name: "Jane Smith",
			pic: "https://via.placeholder.com/150",
			bloodType: "O-",
			tag: "Universal Donor",
		},
		{
			name: "Mike Johnson",
			pic: "https://via.placeholder.com/150",
			bloodType: "B+",
			tag: "New Donor",
		},
		// Add more donor objects as needed
	];

	return (
		<div className="mt-16">
			<h1 className="font-semibold text-4xl mb-6">Top Donors</h1>
			<div className="flex items-center gap-8 overflow-x-scroll">
				{donors.map((donor, index) => (
					<div
						key={index}
						className="flex gap-2 items-center"
					>
						<div>
							<img
								src={donor.pic}
								alt={`${donor.name}'s picture`}
								className="w-20 h-20 rounded-full object-cover"
							/>
						</div>
						<div>
							<div className="flex items-center gap-2 mb-2">
								<h2 className="font-semibold">{donor.name}</h2>
								<span className="px-2 py-1 bg-[#ECECEC] text-black/70 rounded-full text-[8px]">
									{donor.tag}
								</span>
							</div>
							<p className="text-black/70 text-xs">{donor.bloodType}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default TopDonors;
