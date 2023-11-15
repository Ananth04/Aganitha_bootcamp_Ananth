//Create an array of persons. Now, copy that array.
//Add a new address to one of the persons. See what happens.

const persons = [
    {
      name: 'John',
      age: 30,
      addresses: [
        {
            street: '1',
            city: 'Hyderabad',
            state: 'Telengana',
            postalCode: '500001',
            country: 'India'
        }
      ]
    },
    {
      name: 'Alice',
      age: 25,
      addresses: [
        {
            street: '2',
            city: 'Hyderabad',
            state: 'Telengana',
            postalCode: '500002',
            country: 'India'
        }
      ]
    }
  ];
  
  const copiedPersons = [...persons];
  copiedPersons[0].addresses.push({
    street: '3',
    city: 'Hyderabad',
    state: 'Telengana',
    postalCode: '500003',
    country: 'India'
  });
  
  console.log('Original Persons Array:');
  console.log(persons);
  
  console.log('\nCopied Persons Array with Modified Address:');
  console.log(copiedPersons);
  