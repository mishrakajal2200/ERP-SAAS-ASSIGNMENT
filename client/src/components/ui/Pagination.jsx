import { Pagination as MuiPagination, Stack } from "@mui/material";

const Pagination = ({ page, count, onChange }) => {
  return (
    <Stack spacing={2} alignItems="center" sx={{ mt: 2 }}>
      <MuiPagination
        page={page}
        count={count}
        onChange={onChange}
        color="primary"
      />
    </Stack>
  );
};

export default Pagination;