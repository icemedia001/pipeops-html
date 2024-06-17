import Nav from "@/components/Nav";
import Search from "@/components/Search-form";
import Results from "@/components/Search-result";

export default function Home() {
	return (
		<div className="px-[100px] ">
			<Nav />
			<Search />
			<Results />
		</div>
	);
}
