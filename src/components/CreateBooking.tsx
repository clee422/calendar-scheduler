import { useState } from "react";

export default function CreateBooking() {
    function submitForm() {}

    return (
        <div>
            <form action={submitForm}>
                <h2>Description</h2>
                <input
                    name="description"
                    type="text"
                    placeholder="A brief description of what you want done to your car"
                />
                <h2>Vehicle Information</h2>
                <div className="vehicle-info-form">
                    <span>Make</span>
                    <input name="vehicle-make" type="text" />
                    <span>Model</span>
                    <input name="vehicle-model" type="text" />
                    <span>Year</span>
                    <input name="vehicle-year" type="text" />
                </div>
                <button>Submit</button>
            </form>
        </div>
    );
}
