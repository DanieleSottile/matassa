<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddColumnCategory extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('consumables', function (Blueprint $table) {
            $table->integer('category_id')->default(NULL);
            $table->foreign('category_id')->references('id')->on('consumable_categories');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('consumables', function (Blueprint $table) {
            $table->dropColumn('category_id');
        });
    }
}
