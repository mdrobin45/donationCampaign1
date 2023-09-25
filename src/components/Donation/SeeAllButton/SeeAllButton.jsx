const SeeAllButton = ({ seeMoreHandler }) => {
   return (
      <div className="text-center">
         <button
            className="bg-[#009444] px-6 py-3 rounded-md mx-auto text-white text-md"
            onClick={seeMoreHandler}>
            See More
         </button>
      </div>
   );
};

export default SeeAllButton;
