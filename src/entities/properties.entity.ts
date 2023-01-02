import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { Address } from "./addresses.entity";
import { Category } from "./categories.entity";
import { UserProperty } from "./scheduleUsersProperties.entity";

@Entity('properties')
class Property { 
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ default: false })
    sold: boolean

    @Column()
    value: number

    @Column()
    size: number

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    @OneToOne(() => Address) @JoinColumn()
    address: Address

    @ManyToOne(() => Category, categories => categories.properties)
    category: Category

    @OneToMany(() => UserProperty, userProperty => userProperty.property, { nullable: false })
    properties: UserProperty[]

}

export { Property }