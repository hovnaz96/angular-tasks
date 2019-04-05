<?php

namespace App\Http\Requests\Auth;

use Illuminate\Foundation\Http\FormRequest;

class RegisterRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $date_of_birth = implode(' ', [
            $this->input('month'),
            $this->input('day'),
            $this->input('year')
        ]);

        $this->request->add(['date_of_birth' => $date_of_birth]);

        return [
            'name'      => 'required|max:80|string',
            'surname'   => 'required|max:80|string',
            'email'     => 'required|email|string|max:80|unique:users,email',
            'phone'     => 'required|numeric|unique:users,phone',
            'month'     => "required|date_format:'M'",
            'day'       => "required|date_format:'j'",
            'year'      => "required|date_format:'Y'",
            'date_of_birth' => 'required|date_format:"M j Y"'
        ];
    }
}
