/*====================
    Custom Slim Select JS
=======================*/
document.querySelectorAll('.custom-slim-select').forEach((selectElement) => {
    new SlimSelect({
        select: selectElement,
        settings: {
            showSearch: false,
        },
    });
});

const countries = [{
    text: 'United States',
    value: 'US',
    html: '<img src="https://flagcdn.com/us.svg" class="country img-fluid"/> United States'
},
{
    text: 'Canada',
    value: 'CA',
    html: '<img src="https://flagcdn.com/ca.svg" class="country img-fluid"/> Canada'
},
{
    text: 'United Kingdom',
    value: 'UK',
    html: '<img src="https://flagcdn.com/gb.svg" class="country img-fluid"/> United Kingdom'
},
{
    text: 'Germany',
    value: 'DE',
    html: '<img src="https://flagcdn.com/de.svg" class="country img-fluid"/> Germany'
},
{
    text: 'France',
    value: 'FR',
    html: '<img src="https://flagcdn.com/fr.svg" class="country img-fluid"/> France'
},
{
    text: 'Japan',
    value: 'JP',
    html: '<img src="https://flagcdn.com/jp.svg" class="country img-fluid"/> Japan'
},
{
    text: 'India',
    value: 'IN',
    html: '<img src="https://flagcdn.com/in.svg" class="country img-fluid"/> India'
},
{
    text: 'Italy',
    value: 'IT',
    html: '<img src="https://flagcdn.com/it.svg" class="country img-fluid"/> Italy'
},];

const countrySelect = new SlimSelect({
    select: '#selectElement',
    data: countries,
    settings: {
        showSearch: true,
    },
});

new SlimSelect({
    select: '#selectElement',

    data: [
        { text: 'India', value: 'in' },
        { text: 'United States', value: 'us' },
        { text: 'United Arab Emirates', value: 'ae' },
        { text: 'United Kingdom', value: 'gb' },
    ],

    render: {
        option: (option) => {
            return `
        <div style="display:flex;align-items:center;gap:10px;">
          <span class="fi fi-${option.value}" style="width:20px;height:14px;border-radius:3px;"></span>
          <span>${option.text}</span>
        </div>
      `;
        },

        optionSelected: (option) => {
            return `
        <div style="display:flex;align-items:center;gap:10px;">
          <span class="fi fi-${option.value}" style="width:20px;height:14px;border-radius:3px;"></span>
          <span>${option.text}</span>
        </div>
      `;
        }
    }
});
