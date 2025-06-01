const formData = {
    email: "",
    message: ""
  };
  
  const STORAGE_KEY = "feedback-form-state";
  
  const form = document.querySelector(".feedback-form");
  
  populateForm();
  
  form.addEventListener("input", onInputChange);
  
  form.addEventListener("submit", onFormSubmit);
  
  function onInputChange(event) {
    const { name, value } = event.target;
    if (name === "email" || name === "message") {
      formData[name] = value;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
    }
  }
  
  function populateForm() {
    const savedData = localStorage.getItem(STORAGE_KEY);
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      formData.email = parsedData.email || "";
      formData.message = parsedData.message || "";
  
      form.elements.email.value = formData.email;
      form.elements.message.value = formData.message;
    }
  }
  
  function onFormSubmit(event) {
    event.preventDefault();
  
    if (!formData.email.trim() || !formData.message.trim()) {
      alert("Fill please all fields");
      return;
    }
  
    console.log("Form data submitted:", formData);
  
    localStorage.removeItem(STORAGE_KEY);
    formData.email = "";
    formData.message = "";
    form.reset();
  }