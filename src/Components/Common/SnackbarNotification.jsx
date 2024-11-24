import PropTypes from "prop-types";
import { Snackbar, Alert } from "@mui/material";

const SnackbarNotification = ({ open, onClose, message, severity }) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={3000}
      onClose={onClose}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
    >
      <Alert onClose={onClose} severity={severity} sx={{ width: "100%" }}>
        {message}
      </Alert>
    </Snackbar>
  );
};

SnackbarNotification.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
  severity: PropTypes.oneOf(["success", "info", "warning", "error"]).isRequired,
};

export default SnackbarNotification;
