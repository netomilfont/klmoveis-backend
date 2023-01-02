import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('addresses')
class Address {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    district: string

    @Column({ length: 8 })
    zipcode: string

    @Column({ nullable: true})
    number?: string 

    @Column()
    city: string

    @Column({ length: 2 })
    state: string

}

export { Address }