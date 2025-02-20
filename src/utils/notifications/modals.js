import Swal from "sweetalert2";

export const modalConfirmationShoppingCart = ({
  title,
  text,
  icon,
  confirmTitle,
  confirmText,
  confirmIcon,
}) => {
  Swal.fire({
    title: title,
    text: text,
    icon: icon,
    showCancelButton: true,
    confirmButtonColor: "#dc3545",
    cancelButtonColor: "#333330",
    confirmButtonText: "Sí",
    cancelButtonText: "No",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: confirmTitle,
        text: confirmText,
        icon: confirmIcon,
        confirmButtonColor: "#333330",
      });
    }
  });
};
