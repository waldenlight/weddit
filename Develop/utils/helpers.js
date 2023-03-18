module.exports = {
  format_date: (date) => {
    // Format date as MM/DD/YYYY
    return date.toLocaleDateString();
  },
  // format_amount: (id) => {
  //   // format large numbers with commas
  //   return parseInt(id).toLocaleString();
  // },
};
