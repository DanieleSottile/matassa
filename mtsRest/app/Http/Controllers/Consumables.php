<?php

namespace App\Http\Controllers;

use App\Consumable;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class Consumables extends Controller
{
/**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index($id = null) {
        if ($id == null) {
            return Consumable::orderBy('id', 'asc')->get();
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
        $item = new Consumable;

        $item->name = $request->input('name');
        $item->save();

        return  $item;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return Response
     */
    public function show($id) {
        return Consumable::find($id);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  Request  $request
     * @param  int  $id
     * @return Response
     */
    public function update(Request $request, $id) {
        $item = Consumable::find($id);

        $item->name = $request->input('name');
        $item->save();

        return "Sucess updating ingredient #" . $item->id;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return Response
     */
    public function destroy($id) {
        $item = Consumable::find($id);

        if (isset($item)) {
            $item->delete();
            return "Ingredient record successfully deleted #" . $id;
        }
    }
}
