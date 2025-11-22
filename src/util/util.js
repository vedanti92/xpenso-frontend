export const addThousandsSeparator = (num) => {
  if (num == null || isNaN(num)) return "";

  // convert number to string to handle decimals
  const numStr = num.toString();
  const parts = numStr.split("."); // split integer and decimal parts

  let integerPart = parts[0];
  let decimalPart = parts[1];

  // regex for Indian numbering system
  // it handles first 3 digits, then every 2 digits
  const lastThree = integerPart.substring(integerPart.length - 3);
  const otherNumbers = integerPart.substring(0, integerPart.length - 3);

  if (otherNumbers !== "") {
    // apply comma after every 2 digits for the 'otherNumbers' part
    const formattedOtherNumbers = otherNumbers.replace(
      /\B(?=(\d{2})+(?!\d))/g,
      ","
    );
    integerPart = formattedOtherNumbers + "," + lastThree;
  } else {
    integerPart = lastThree; // no change if less than 4 digits
  }

  // combine integer and decimal parts
  return decimalPart ? `${integerPart}.${decimalPart}` : integerPart;
};
