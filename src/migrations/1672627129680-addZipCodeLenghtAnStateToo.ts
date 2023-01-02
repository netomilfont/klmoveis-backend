import { MigrationInterface, QueryRunner } from "typeorm";

export class addZipCodeLenghtAnStateToo1672627129680 implements MigrationInterface {
    name = 'addZipCodeLenghtAnStateToo1672627129680'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "addresses" DROP COLUMN "zipcode"`);
        await queryRunner.query(`ALTER TABLE "addresses" ADD "zipcode" character varying(8) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "addresses" DROP COLUMN "state"`);
        await queryRunner.query(`ALTER TABLE "addresses" ADD "state" character varying(2) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "addresses" DROP COLUMN "state"`);
        await queryRunner.query(`ALTER TABLE "addresses" ADD "state" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "addresses" DROP COLUMN "zipcode"`);
        await queryRunner.query(`ALTER TABLE "addresses" ADD "zipcode" character varying NOT NULL`);
    }

}
