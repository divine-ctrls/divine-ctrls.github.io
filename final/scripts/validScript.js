        // Populate state dropdown with US states
        const states = [
            'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 
            'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 
            'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 
            'VA', 'WA', 'WV', 'WI', 'WY'
        ];
        const stateSelect = document.getElementById('state');
        states.forEach(state => {
            const option = document.createElement('option');
            option.value = state;
            option.textContent = state;
            stateSelect.appendChild(option);
        });

        // Capitalize function for names and city
        function capitalize(str) {
            if (!str) return '';
            return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
        }

        // Validate form
        function validateForm(event) {
            event.preventDefault();
            let isValid = true;

            // Reset error messages
            document.querySelectorAll('.error').forEach(error => error.style.display = 'none');

            // First Name
            const firstName = document.getElementById('firstName');
            const firstNameValue = firstName.value.trim();
            if (!/^[A-Za-z]+$/.test(firstNameValue)) {
                document.getElementById('firstNameError').style.display = 'block';
                isValid = false;
            } else {
                firstName.value = capitalize(firstNameValue);
            }

            // Last Name
            const lastName = document.getElementById('lastName');
            const lastNameValue = lastName.value.trim();
            if (!/^[A-Za-z]+$/.test(lastNameValue)) {
                document.getElementById('lastNameError').style.display = 'block';
                isValid = false;
            } else {
                lastName.value = capitalize(lastNameValue);
            }

            // Address
            const address = document.getElementById('address');
            const addressValue = address.value.trim();
            if (addressValue.length < 5) {
                document.getElementById('addressError').style.display = 'block';
                isValid = false;
            }

            // City
            const city = document.getElementById('city');
            const cityValue = city.value.trim();
            if (!/^[A-Za-z\s]+$/.test(cityValue)) {
                document.getElementById('cityError').style.display = 'block';
                isValid = false;
            } else {
                city.value = capitalize(cityValue);
            }

            // State
            const state = document.getElementById('state');
            if (!state.value) {
                document.getElementById('stateError').style.display = 'block';
                isValid = false;
            } else {
                state.value = state.value.toUpperCase();
            }

            // Zip
            const zip = document.getElementById('zip');
            const zipValue = zip.value.trim();
            if (!/^\d{5}$/.test(zipValue)) {
                document.getElementById('zipError').style.display = 'block';
                isValid = false;
            }

            // Email
            const email = document.getElementById('email');
            const emailValue = email.value.trim();
            if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(emailValue)) {
                document.getElementById('emailError').style.display = 'block';
                isValid = false;
            }

            // Show success message if valid
            if (isValid) {
                document.getElementById('successMessage').style.display = 'block';
                document.getElementById('userForm').reset();
                setTimeout(() => {
                    document.getElementById('successMessage').style.display = 'none';
                }, 3000);
            }

            return isValid;
        }