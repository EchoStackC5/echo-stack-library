import GenreBarChart from "./GenreBarChart";

// import { chartConfig } from "./GenreBarChart";
export default function GenresPage() {
  return (
    <div className="flex flex-col gap-8 md:gap-15 p-4 md:p-6 ">
        <div className="font-font-satoshi space-y-4">
        <h1 className=" text-lg md:text-2xl font-medium text-darkestHeading ">Manage Genres</h1>
        <p className="text-muted-foreground text-sm md:text-lg ">Manage your book genres here. You can add, edit, or delete genres as needed.</p>
      </div>
      < GenreBarChart />
      
    </div>
  );
}