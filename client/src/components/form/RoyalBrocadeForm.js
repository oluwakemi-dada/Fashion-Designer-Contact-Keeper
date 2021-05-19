import React from 'react';

const RoyalBrocadeForm = ({
  index,
  royalBrocadeTopArr,
  setRoyalBrocadeTopArr,
}) => {
  // Destructure data from the current index
  const {
    name,
    back,
    chest,
    length,
    roundSleeve,
    sleeveLength,
    shortSleeveLength,
    stomach,
    neck,
    cuffWrist,
    threeFourSleeve,
    threeFourRoundSleeve,
  } = royalBrocadeTopArr[index];

  // CHANGE INPUT VALUE
  const onChange = (e, i) => {
    const values = [...royalBrocadeTopArr];

    if (e.target.name === 'name') {
      values[i].name = e.target.value;
    } else if (e.target.name === 'back') {
      values[i].back = e.target.value;
    } else if (e.target.name === 'chest') {
      values[i].chest = e.target.value;
    } else if (e.target.name === 'length') {
      values[i].length = e.target.value;
    } else if (e.target.name === 'roundSleeve') {
      values[i].roundSleeve = e.target.value;
    } else if (e.target.name === 'sleeveLength') {
      values[i].sleeveLength = e.target.value;
    } else if (e.target.name === 'shortSleeveLength') {
      values[i].shortSleeveLength = e.target.value;
    } else if (e.target.name === 'stomach') {
      values[i].stomach = e.target.value;
    } else if (e.target.name === 'neck') {
      values[i].neck = e.target.value;
    } else if (e.target.name === 'cuffWrist') {
      values[i].cuffWrist = e.target.value;
    } else if (e.target.name === 'threeFourSleeve') {
      values[i].threeFourSleeve = e.target.value;
    } else if (e.target.name === 'threeFourRoundSleeve') {
      values[i].threeFourRoundSleeve = e.target.value;
    }

    setRoyalBrocadeTopArr(values);
  };

  // REMOVE SINGLE FORM
  const onRemoveForm = (formIndex) => {
    const newArr = royalBrocadeTopArr.filter(
      (RBT) => royalBrocadeTopArr.indexOf(RBT) !== formIndex
    );

    setRoyalBrocadeTopArr(newArr);
  };

  return (
    <div>
      <div>{`Form ${index + 1}`}</div>
      <div
        onClick={() => {
          onRemoveForm(index);
        }}
      >
        X
      </div>

      <input
        type='text'
        placeholder='Name'
        name='name'
        value={name}
        required
        onChange={(e) => {
          onChange(e, index);
        }}
      />
      <input
        type='text'
        placeholder='Back'
        name='back'
        value={back}
        onChange={(e) => {
          onChange(e, index);
        }}
      />
      <input
        type='text'
        placeholder='Chest'
        name='chest'
        value={chest}
        onChange={(e) => {
          onChange(e, index);
        }}
      />
      <input
        type='text'
        placeholder='Length'
        name='length'
        value={length}
        onChange={(e) => {
          onChange(e, index);
        }}
      />
      <input
        type='text'
        placeholder='Round Sleeve'
        name='roundSleeve'
        value={roundSleeve}
        onChange={(e) => {
          onChange(e, index);
        }}
      />
      <input
        type='text'
        placeholder='Sleeve Length'
        name='sleeveLength'
        value={sleeveLength}
        onChange={(e) => {
          onChange(e, index);
        }}
      />
      <input
        type='text'
        placeholder='Short Sleeve Length'
        name='shortSleeveLength'
        value={shortSleeveLength}
        onChange={(e) => {
          onChange(e, index);
        }}
      />
      <input
        type='text'
        placeholder='Stomach'
        name='stomach'
        value={stomach}
        onChange={(e) => {
          onChange(e, index);
        }}
      />
      <input
        type='text'
        placeholder='Neck'
        name='neck'
        value={neck}
        onChange={(e) => {
          onChange(e, index);
        }}
      />
      <input
        type='text'
        placeholder='Cuff Wrist'
        name='cuffWrist'
        value={cuffWrist}
        onChange={(e) => {
          onChange(e, index);
        }}
      />
      <input
        type='text'
        placeholder='Three Four Sleeve'
        name='threeFourSleeve'
        value={threeFourSleeve}
        onChange={(e) => {
          onChange(e, index);
        }}
      />
      <input
        type='text'
        placeholder='Three Four Round Sleeve'
        name='threeFourRoundSleeve'
        value={threeFourRoundSleeve}
        onChange={(e) => {
          onChange(e, index);
        }}
      />
    </div>
  );
};

export default RoyalBrocadeForm;
