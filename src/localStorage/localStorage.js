import Swal from "sweetalert2";

// get item from local storage
const getSavedDonation = () => {
   const savedItem = localStorage.getItem("help_donation");
   if (savedItem) {
      return JSON.parse(savedItem);
   } else {
      return [];
   }
};

// save item to local storage
const saveDonationInStorage = (id) => {
   const savedItem = getSavedDonation();
   const exist = savedItem.find((item) => item === id);

   if (!exist) {
      savedItem.push(id);
      localStorage.setItem("help_donation", JSON.stringify(savedItem));

      // Show sweet alert message
      Swal.fire({
         position: "center-center",
         icon: "success",
         title: "Thanks for your donation!",
         showConfirmButton: false,
         timer: 1500,
      });
   } else {
      // Show sweet alert message
      Swal.fire({
         position: "center-center",
         icon: "error",
         title: "Already donated!",
         showConfirmButton: false,
         timer: 1000,
      });
   }
};

export { getSavedDonation, saveDonationInStorage };
