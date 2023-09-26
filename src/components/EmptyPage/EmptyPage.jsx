import hourGlass from "../../../public/images/hourglass.svg";

const EmptyPage = () => {
   return (
      <div className="flex h-[80vh] items-center justify-center flex-col">
         <img className=" w-52" src={hourGlass} alt="Empty" />
         <h2 className="text-2xl font-bold pt-6">
            You do not have any donation yet!
         </h2>
      </div>
   );
};

export default EmptyPage;
