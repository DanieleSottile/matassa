<?php

namespace App\Http\Controllers;

use App\Ingredient;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class Ingredients extends Controller
{
/**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index($id = null) {
        if ($id == null) {
            return Ingredient::orderBy('id', 'asc')->get();
        } else {
            return $this->show($id);
        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  Request  $request
     * @return Response
     */
    public function store(Request $request) {
        $ingredient = new Ingredient;

        $ingredient->name = $request->input('name');
        $ingredient->save();

        return  $ingredient;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return Response
     */
    public function show($id) {
        return Ingredient::find($id);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  Request  $request
     * @param  int  $id
     * @return Response
     */
    public function update(Request $request, $id) {
        $ingredient = Ingredient::find($id);

        $ingredient->name = $request->input('name');
        $ingredient->save();

        return "Sucess updating ingredient #" . $ingredient->id;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return Response
     */
    public function destroy($id) {
        $ingredient = Ingredient::find($id);

        if (isset($ingredient)) {
            $ingredient->delete();
            return "Ingredient record successfully deleted #" . $id;
        }
    }
}
