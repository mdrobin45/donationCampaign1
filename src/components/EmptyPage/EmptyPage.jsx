import hourGlass from "../../../public/images/empty-page.svg";

const EmptyPage = () => {
   return (
      <div className="flex h-[80vh] items-center justify-center flex-col">
         <img className=" w-3/6" src={hourGlass} alt="Empty" />
         <h2 className="text-3xl font-bold ">Ups!... no results found</h2>
         <p className="text-lg">Please make a donation</p>
      </div>
   );
};

export default EmptyPage;
