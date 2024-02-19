import Select from "react-select";

type ControlsProps = {
  sortField: string;
  sortDirection: string;
  onSortChange: (field: string, direction: string) => void;
};

const Controls = ({
  sortField,
  sortDirection,
  onSortChange,
}: ControlsProps) => {
  const fieldOptions = [
    { label: "Name", value: "name" },
    { label: "Company", value: "company.name" },
    { label: "Email", value: "email" },
  ];
  const directionOptions = [
    { label: "Ascending", value: "ascending" },
    { label: "Descending", value: "descending" },
  ];

  const handleSortFieldChange = (selectedOption: any) => {
    const newField = selectedOption ? selectedOption.value : "name";
    onSortChange(newField, sortDirection);
  };

  const handleSortDirectionChange = (selectedOption: any) => {
    const newDirection = selectedOption ? selectedOption.value : "ascending";
    onSortChange(sortField, newDirection);
  };

  return (
    <div className='gallery-controls controls'>
      <div className='form-group group'>
        <label htmlFor='sort-field' className='label'>
          Sort Field
        </label>
        <Select
          options={fieldOptions}
          inputId='sort-field'
          className='input'
          value={fieldOptions.find((option) => option.value === sortField)}
          onChange={handleSortFieldChange}
        />
      </div>
      <div className='form-group group'>
        <label htmlFor='sort-direction' className='label'>
          Sort Direction
        </label>
        <Select
          options={directionOptions}
          inputId='sort-direction'
          className='input'
          value={directionOptions.find(
            (option) => option.value === sortDirection
          )}
          onChange={handleSortDirectionChange}
        />
      </div>
    </div>
  );
};

export default Controls;
