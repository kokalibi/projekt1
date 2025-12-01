import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export default function FilterDataForm() {
    const [searchParams, setSearchParams] = useSearchParams(); 
    
    const [formData, setFormData] = useState({
        name: "",
        category: "",
        minPrice: "",
        maxPrice: ""
    });

    const [results, setResults] = useState([]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const params = {};

        if (formData.name) params.name = formData.name;
        if (formData.category) params.category = formData.category;
        if (formData.minPrice) params.minPrice = formData.minPrice;
        if (formData.maxPrice) params.maxPrice = formData.maxPrice;

        setSearchParams(params);  // <-- URL param frissítés
    };

    // 🔥 GET kérés minden searchParam változásra
    useEffect(() => {
        const name = searchParams.get("name") || "";
        const category = searchParams.get("category") || "";
        const minPrice = searchParams.get("minPrice") || "";
        const maxPrice = searchParams.get("maxPrice") || "";

        const url = new URL("https://example.com/api/products");
        if (name) url.searchParams.append("name", name);
        if (category) url.searchParams.append("category", category);
        if (minPrice) url.searchParams.append("minPrice", minPrice);
        if (maxPrice) url.searchParams.append("maxPrice", maxPrice);

        fetch(url)
            .then((res) => res.json())
            .then((data) => setResults(data))
            .catch((err) => console.error("Fetch error:", err));
    }, [searchParams]);  // <-- amikor változik, GET kérés megy

    return (
        <div>
            <h2>Filter Data</h2>

            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input 
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </label>

                <label>
                    Category:
                    <input 
                        type="text"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                    />
                </label>

                <label>
                    Min price:
                    <input 
                        type="number"
                        name="minPrice"
                        value={formData.minPrice}
                        onChange={handleChange}
                    />
                </label>

                <label>
                    Max price:
                    <input 
                        type="number"
                        name="maxPrice"
                        value={formData.maxPrice}
                        onChange={handleChange}
                    />
                </label>

                <button type="submit">Filter</button>
            </form>

            <h3>Results:</h3>
            <pre>{JSON.stringify(results, null, 2)}</pre>
        </div>
    );
}
