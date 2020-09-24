import ReactTable from "react-table";

export default function Table(props) {
  const disablePagination = props.disablePagination
    ? {
        showPagination: false,
        defaultPageSize: props.data.length,
      }
    : {};

  return (
    <ReactTable
      sortable={false}
      defaultPageSize={10}
      showPageSizeOptions={false}
      previousText="Назад"
      nextText="Вперед"
      pageText="Сторінка"
      rowsText="Рядок"
      ofText="із"
      getTdProps={() => ({
        style: {
          textAlign: "center",
        },
      })}
      getTheadThProps={() => ({
        style: {
          backgroundColor: "rgba(221, 228, 255)",
        },
      })}
      {...{ ...props, ...disablePagination }}
    />
  );
}
