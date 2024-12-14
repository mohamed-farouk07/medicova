import React, { useState } from "react";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  TextField,
  Typography,
  Box,
  InputAdornment,
  Collapse,
  IconButton,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

// const filterSections = {
//     city: [
//       { label: "All", count: 100, value: "all" },
//       { label: "Cairo", count: 50, value: "cairo" },
//       { label: "Riyadh", count: 30, value: "riyadh" },
//     ],
//     nationality: [
//       { label: "All", count: 200, value: "all" },
//       { label: "Egyptian", count: 120, value: "egyptian" },
//       { label: "Saudi Arabian", count: 80, value: "saudi" },
//     ],
//     industry: [
//       { label: "All", count: 300, value: "all" },
//       { label: "Physicians", count: 150, value: "physicians" },
//       { label: "Dentists", count: 50, value: "dentists" },
//       { label: "Physical Therapists", count: 40, value: "physical_therapists" },
//       { label: "Pharmacists", count: 30, value: "pharmacists" },
//       { label: "Nurses", count: 30, value: "nurses" },
//     ],
//     category: [
//       { label: "All", count: 200, value: "all" },
//       { label: "Doctor", count: 100, value: "doctor" },
//       { label: "Nurse", count: 50, value: "nurse" },
//       { label: "Pharmaceutical", count: 30, value: "pharmaceutical" },
//       { label: "Physicalists", count: 10, value: "physicalists" },
//       { label: "Specialized", count: 10, value: "specialized" },
//     ],
//     educationLevel: [
//       { label: "All", count: 250, value: "all" },
//       { label: "Institute", count: 50, value: "institute" },
//       { label: "Bachelor’s Degree", count: 100, value: "bachelor" },
//       { label: "Doctorate Degree", count: 70, value: "doctorate" },
//       { label: "Fellowship", count: 30, value: "fellowship" },
//     ],
//     yearsOfExperience: [
//       { label: "All", count: 150, value: "all" },
//       { label: "1-3", count: 50, value: "1-3" },
//       { label: "3-5", count: 40, value: "3-5" },
//       { label: "5-10", count: 30, value: "5-10" },
//       { label: "+10", count: 30, value: "10+" },
//     ],
//     gender: [
//       { label: "All", count: 300, value: "all" },
//       { label: "Male", count: 200, value: "male" },
//       { label: "Female", count: 100, value: "female" },
//     ],
//     age: [
//       { label: "18-25", count: 40, value: "18-25" },
//       { label: "26-35", count: 50, value: "26-35" },
//       { label: "36-45", count: 30, value: "36-45" },
//       { label: "46-60", count: 20, value: "46-60" },
//       { label: "60+", count: 10, value: "60+" },
//     ],
//   };

//   const handleFilterChange = (sectionTitle: string, value: string) => {
//     console.log(`${sectionTitle} changed to: ${value}`);
//   };
interface FilterOption {
  label: string;
  count: number;
  value: string;
}

interface FilterSection {
  title: string;
  options: FilterOption[];
}

interface FilterSectionsProps {
  sections: Record<string, FilterOption[]>;
  onFilterChange: (sectionKey: string, value: string) => void;
}

const FilterSections: React.FC<FilterSectionsProps> = ({
  sections,
  onFilterChange,
}) => {
  const [searchTerm, setSearchTerm] = useState<Record<string, string>>({
    nationality: "",
  });
  const [selectedValues, setSelectedValues] = useState<Record<string, string>>(
    {}
  );
  const [expandedSections, setExpandedSections] = useState<
    Record<string, boolean>
  >(
    Object.keys(sections).reduce(
      (acc, key) => {
        acc[key] = true; // All sections open by default
        return acc;
      },
      {} as Record<string, boolean>
    )
  );

  const handleSearchChange = (
    sectionKey: string,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchTerm((prev) => ({
      ...prev,
      [sectionKey]: event.target.value,
    }));
  };

  const handleRadioChange = (sectionKey: string, value: string) => {
    setSelectedValues((prev) => ({
      ...prev,
      [sectionKey]: value,
    }));
    onFilterChange(sectionKey, value);
  };

  const toggleSection = (key: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const filteredSections = Object.entries(sections).map(([key, options]) => ({
    key,
    title: key.charAt(0).toUpperCase() + key.slice(1),
    options:
      key === "nationality" && searchTerm[key]
        ? options.filter((option) =>
            option.label.toLowerCase().includes(searchTerm[key].toLowerCase())
          )
        : options,
  }));

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <div className="space-y-6">
        {filteredSections.map((section) => (
          <div key={section.key} className="border-b pb-4 last:border-b-0">
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography
                variant="h6"
                className="font-medium text-gray-800 mb-3"
              >
                {section.title}
              </Typography>
              <IconButton
                onClick={() => toggleSection(section.key)}
                size="small"
              >
                {expandedSections[section.key] ? (
                  <ExpandLessIcon />
                ) : (
                  <ExpandMoreIcon />
                )}
              </IconButton>
            </Box>

            {section.key === "nationality" && (
              <TextField
                fullWidth
                variant="outlined"
                placeholder="Search nationalities..."
                value={searchTerm.nationality}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleSearchChange("nationality", e)
                }
                className="mb-3"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon className="text-gray-400" />
                    </InputAdornment>
                  ),
                }}
              />
            )}

            <Collapse in={expandedSections[section.key]}>
              <FormControl component="fieldset">
                <RadioGroup
                  value={selectedValues[section.key] || ""}
                  onChange={(e) =>
                    handleRadioChange(section.key, e.target.value)
                  }
                >
                  <div className="grid grid-cols-1 gap-2">
                    {section.options.map((option) => (
                      <FormControlLabel
                        key={option.value}
                        value={option.value}
                        control={<Radio />}
                        label={`${option.label} (${option.count})`}
                        className="text-gray-700 hover:bg-gray-50 rounded-md transition-colors"
                      />
                    ))}
                  </div>
                </RadioGroup>
              </FormControl>
            </Collapse>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterSections;
