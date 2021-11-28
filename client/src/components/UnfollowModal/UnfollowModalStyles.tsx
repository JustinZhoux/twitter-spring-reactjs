import {makeStyles} from "@material-ui/core";

export const useUnfollowModalStyles = makeStyles((theme) => ({
    modalWrapper: {
        width: 280,
        height: 176,
        textAlign: "center",
        margin: "32px 20px",
    },
    modalFullName: {
        color: theme.palette.text.primary,
        fontWeight: 700,
        fontSize: 20,
    },
    modalUsername: {
        color: "rgb(83, 100, 113)",
        fontWeight: 400,
        fontSize: 15,
        marginTop: 8,
        marginBottom: 24,
    },
    modalButtonWrapper: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    modalCancelButton: {
        width: 134,
        height: 40,
        color: theme.palette.text.primary,
        backgroundColor: "rgb(239, 243, 244)",
        borderRadius: '25px',
    },
    modalUnfollowButton: {
        width: 134,
        height: 40,
        border: '1px solid',
        borderRadius: '25px',
    },
}));