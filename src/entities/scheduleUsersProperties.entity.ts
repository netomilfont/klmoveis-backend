import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm";
import { Property } from "./properties.entity";
import { User } from "./users.entity";

@Entity('schedules_users_properties')
class UserProperty { 
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ type: 'date' })
    date: string

    @Column({ type: 'time' })
    hour: string 

    @ManyToOne(()=> Property, property => property.properties)
    property: Property

    @ManyToOne(() => User, user => user.properties)
    user: User

}

export { UserProperty }