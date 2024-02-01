const FormatPhoneNumber= ({input}) => {
    // Remove non-numeric characters
    const cleaned = input.replace(/\D/g, '');
  
    // Format the phone number
    const formatted = cleaned.replace(/(\d{3})(\d{3})(\d{4})/, '($1)-$2-$3');
  
    return formatted;
  }

  export default FormatPhoneNumber;